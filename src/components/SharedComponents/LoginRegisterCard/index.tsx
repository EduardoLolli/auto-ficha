import { CardHeader, StyledGenericCard } from "./style";

interface GenericCardProps {
  title: string;
  paragraph: string;
  children: React.ReactNode;
}

const GenericCard: React.FC<GenericCardProps> = ({
  title,
  paragraph,
  children,
}) => {
  return (
    <StyledGenericCard>
      <CardHeader>
        <h3 className="card-title">{title}</h3>
        <p className="card-p">{paragraph}</p>
      </CardHeader>
      <div className="form-container">{children}</div>
    </StyledGenericCard>
  );
};

export default GenericCard;
