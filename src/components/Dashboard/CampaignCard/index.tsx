import React, { JSX } from "react";
import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle, CodeBox, CodeInner, CodeText, IconButton, InfoContainer, InfoRow } from "../../../pages/DashBoard/style";
import { ArrowRight, Calendar, Check, Copy, KeyRound, Sword, Users } from "lucide-react";


export interface CampaignCardProps {
    campaign: {
        campaignCode: string
        id: number
        masterId: number
        name: string
        playersLimit: number
        systemId: number
    };
    handleEnterCampaign: (campaignId: string) => void;
    handleCopyCode: (code: string) => void;
    copiedCode: string | null;
}

export default function CampaignCard({ campaign, handleEnterCampaign, handleCopyCode, copiedCode }: CampaignCardProps): JSX.Element {


    return (
        <Card key={campaign.id}>
            <CardHeader>
                <CardTitle>{campaign.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <InfoContainer>
                    <CodeBox>
                        <CodeInner>
                            <KeyRound size={16} color="oklch(0.65 0.025 55)" />
                            <CodeText>{campaign.campaignCode}</CodeText>
                        </CodeInner>
                        <IconButton onClick={() => handleCopyCode(campaign.campaignCode)}>
                            {copiedCode === campaign.campaignCode ? <Check size={14} color="#22c55e" /> : <Copy size={14} />}
                        </IconButton>
                    </CodeBox>
                    <InfoRow>
                        <Users size={16} />
                        <span>
                            {}/{campaign.playersLimit} Jogadores
                        </span>
                    </InfoRow>
                    <InfoRow>
                        <Sword size={16} />
                        <span>Nível {}</span>
                    </InfoRow>
                    <InfoRow>
                        <Calendar size={16} />
                        <span>Última sessão: {}</span>
                    </InfoRow>
                </InfoContainer>
            </CardContent>
            <CardFooter>
                <Button style={{ width: "100%" }} onClick={() => handleEnterCampaign(campaign.id.toString())}>
                    Entrar na Campanha
                    <ArrowRight size={16} />
                </Button>
            </CardFooter>
        </Card>
    );
}