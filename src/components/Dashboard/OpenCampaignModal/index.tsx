import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../../../pages/DashBoard/style";
import { ArrowRight } from "lucide-react";


export interface OpenCampaignModalProps {
    isConfirmDialogOpen: boolean;
    setIsConfirmDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
    selectedCampaign: {
        campaignCode: string
        id: number
        masterId: number
        name: string
        playersLimit: number
        systemId: number
    };
    handleConfirmEnter: () => void;
}



export default function OpenCampaignModal({
    isConfirmDialogOpen,
    setIsConfirmDialogOpen,
    selectedCampaign,
    handleConfirmEnter

}: OpenCampaignModalProps) {
    return (
        <Dialog $open={isConfirmDialogOpen} onClick={() => setIsConfirmDialogOpen(false)}>
            <DialogContent onClick={(e) => e.stopPropagation()}>
                <DialogHeader>
                    <DialogTitle>Entrar na Campanha</DialogTitle>
                    <DialogDescription>Deseja entrar na campanha "{selectedCampaign?.name}"?</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button onClick={() => setIsConfirmDialogOpen(false)}>
                        Cancelar
                    </Button>
                    <Button onClick={handleConfirmEnter}>
                        Confirmar
                        <ArrowRight size={16} />
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
