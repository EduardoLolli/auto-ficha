import { Button, Dialog, DialogBody, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, FormGroup, Input, Label, Textarea } from "../../../pages/DashBoard/style";

export interface CampaignCreationProps {

    isCreateDialogOpen: boolean;
    setIsCreateDialogOpen: (open: boolean) => void;
    newCampaign: {
        name: string;
        description: string;
        maxPlayers: number;
    };
    setNewCampaign: (campaign: { name: string; description: string; maxPlayers: number }) => void;
    handleCreateCampaign: () => void;

}


const CampaignCreation = ({
    isCreateDialogOpen,
    setIsCreateDialogOpen,
    newCampaign,
    setNewCampaign,
    handleCreateCampaign
}: CampaignCreationProps) => {

    return (
        <Dialog $open={isCreateDialogOpen} onClick={() => setIsCreateDialogOpen(false)}>
            <DialogContent onClick={(e) => e.stopPropagation()}>
                <DialogHeader>
                    <DialogTitle>Criar Nova Campanha</DialogTitle>
                    <DialogDescription>Preencha os detalhes da sua nova campanha de RPG</DialogDescription>
                </DialogHeader>
                <DialogBody>
                    <FormGroup>
                        <Label htmlFor="name">Nome da Campanha</Label>
                        <Input
                            id="name"
                            placeholder="Ex: A Lenda do Dragão Ancestral"
                            value={newCampaign.name}
                            onChange={(e) => setNewCampaign({ ...newCampaign, name: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="description">Descrição</Label>
                        <Textarea
                            id="description"
                            placeholder="Descreva a história e objetivos da campanha..."
                            value={newCampaign.description}
                            onChange={(e) => setNewCampaign({ ...newCampaign, description: e.target.value })}
                            rows={4}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="maxPlayers">Número Máximo de Jogadores</Label>
                        <Input
                            id="maxPlayers"
                            type="number"
                            min="2"
                            max="10"
                            value={newCampaign.maxPlayers}
                            onChange={(e) => setNewCampaign({ ...newCampaign, maxPlayers: Number.parseInt(e.target.value) || 6 })}
                        />
                    </FormGroup>
                </DialogBody>
                <DialogFooter>
                    <Button $variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                        Cancelar
                    </Button>
                    <Button onClick={handleCreateCampaign}>Criar Campanha</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default CampaignCreation;