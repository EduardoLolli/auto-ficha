import { useEffect, useState } from "react"
import { Sword, Plus, KeyRound, } from "lucide-react"
import { Button, ButtonGroup, CampaignsGrid, ContentWrapper, EmptyState, EmptyStateText, EmptyStateTitle, Header, PageContainer, Subtitle, Title } from "./style"
import CampaignCard from "../../components/Dashboard/CampaignCard"
import JoinCampaign from "../../components/Dashboard/JoinCampaign"
import CampaignCreation from "../../components/Dashboard/CreateCampaignModal"
import axios from "axios"


interface Campaign {
    campaignCode: string
    id: number
    masterId: number
    name: string
    playersLimit: number
    systemId: number
}

function generateCampaignCode(): string {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
    let code = ""
    for (let i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return code
}

export default function CampaignDashboard() {
    const [campaigns, setCampaigns] = useState<Campaign[]>([
    ])

    useEffect(() => {
        const token = localStorage.getItem("token")
        const apiUrl = import.meta.env.VITE_API_URL
        if (!token) return

        axios.get(`${apiUrl}/api/campaing/v1/getCampaignByMasterId/1`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                setCampaigns(response.data.data || [])
            })
            .catch((e) => {
                console.error("Error fetching campaigns:", e)
            })
    }, [campaigns])


    const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
    const [isJoinDialogOpen, setIsJoinDialogOpen] = useState(false)
    const [joinCode, setJoinCode] = useState("")
    const [copiedCode, setCopiedCode] = useState<string | null>(null)

    const [newCampaign, setNewCampaign] = useState({
        name: "",
        description: "",
        maxPlayers: 6,
    })

    const handleCreateCampaign = () => {
        if (newCampaign.name.trim()) {
            const campaign: Campaign = {
                id: Math.floor(Math.random() * 10000),
                name: newCampaign.name,
                campaignCode: generateCampaignCode(),
                playersLimit: newCampaign.maxPlayers,
                masterId: 1,
                systemId: 1,
            }
            setCampaigns([...campaigns, campaign])
            setNewCampaign({ name: "", description: "", maxPlayers: 6 })
            setIsCreateDialogOpen(false)
        }
    }

    const handleJoinWithCode = () => {
        const campaign = campaigns.find((c) => c.campaignCode.toUpperCase() === joinCode.toUpperCase())
        if (campaign) {
            handleEnterCampaign(campaign.id.toString())
            setJoinCode("")
            setIsJoinDialogOpen(false)
        } else {
            alert("Código de campanha inválido!")
        }
    }

    const handleEnterCampaign = (campaignId: string) => {
        console.log("[v0] Entering campaign:", campaignId)
    }

    const handleCopyCode = (code: string) => {
        navigator.clipboard.writeText(code)
        setCopiedCode(code)
        setTimeout(() => setCopiedCode(null), 2000)
    }

    return (
        <PageContainer>
            <ContentWrapper>
                <Header>
                    <Title>Minhas Campanhas</Title>
                    <Subtitle>Selecione uma campanha para continuar sua aventura</Subtitle>
                </Header>

                <ButtonGroup>
                    <Button $variant="outline" $size="lg" onClick={() => setIsJoinDialogOpen(true)}>
                        <KeyRound size={20} />
                        Entrar com Código
                    </Button>

                    <Button $size="lg" onClick={() => setIsCreateDialogOpen(true)}>
                        <Plus size={20} />
                        Criar Nova Campanha
                    </Button>
                </ButtonGroup>

                <CampaignsGrid>
                    {campaigns.map((campaign) => (
                        <CampaignCard
                            key={campaign.id}
                            campaign={campaign}
                            copiedCode={copiedCode}
                            handleCopyCode={handleCopyCode}
                            handleEnterCampaign={handleEnterCampaign} />
                    ))}
                </CampaignsGrid>
                {campaigns.length === 0 && (
                    <EmptyState>
                        <Sword size={48} color="oklch(0.65 0.025 55)" />
                        <EmptyStateTitle>Nenhuma campanha encontrada</EmptyStateTitle>
                        <EmptyStateText>Crie sua primeira campanha para começar sua aventura!</EmptyStateText>
                        <Button onClick={() => setIsCreateDialogOpen(true)}>
                            <Plus size={20} />
                            Criar Campanha
                        </Button>
                    </EmptyState>
                )}
            </ContentWrapper>
            <JoinCampaign
                handleJoinWithCode={handleJoinWithCode}
                isJoinDialogOpen={isJoinDialogOpen}
                joinCode={joinCode}
                setIsJoinDialogOpen={setIsJoinDialogOpen}
                setJoinCode={setJoinCode}
            />
            <CampaignCreation
                handleCreateCampaign={handleCreateCampaign}
                isCreateDialogOpen={isCreateDialogOpen}
                newCampaign={newCampaign}
                setIsCreateDialogOpen={setIsCreateDialogOpen}
                setNewCampaign={setNewCampaign}
            />
        </PageContainer>
    )
}
