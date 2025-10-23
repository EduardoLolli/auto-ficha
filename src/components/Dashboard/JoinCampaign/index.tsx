
import { Button, CodeInput, Dialog, DialogBody, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, FormGroup, HelpText, Label } from "../../../pages/DashBoard/style";

export type JoinCampaignProps = {
    isJoinDialogOpen: boolean;
    setIsJoinDialogOpen: (open: boolean) => void;
    joinCode: string;
    setJoinCode: (code: string) => void;
    handleJoinWithCode: () => void;
};

const JoinCampaign = ({
    isJoinDialogOpen,
    setIsJoinDialogOpen,
    joinCode,
    setJoinCode,
    handleJoinWithCode
}: JoinCampaignProps) => {

    return (
        <Dialog $open={isJoinDialogOpen} onClick={() => setIsJoinDialogOpen(false)}>
            <DialogContent onClick={(e) => e.stopPropagation()}>
                <DialogHeader>
                    <DialogTitle>Entrar em Campanha</DialogTitle>
                    <DialogDescription>Digite o código da campanha para participar</DialogDescription>
                </DialogHeader>
                <DialogBody>
                    <FormGroup>
                        <Label htmlFor="joinCode">Código da Campanha</Label>
                        <CodeInput
                            id="joinCode"
                            placeholder="Ex: C3XBIE3PY0KB"
                            value={joinCode}
                            onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                            maxLength={12}
                        />
                        <HelpText>O código possui 12 caracteres</HelpText>
                    </FormGroup>
                </DialogBody>
                <DialogFooter>
                    <Button $variant="outline" onClick={() => setIsJoinDialogOpen(false)}>
                        Cancelar
                    </Button>
                    <Button onClick={handleJoinWithCode} disabled={joinCode.length !== 12}>
                        Entrar
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default JoinCampaign;