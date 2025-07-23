const CharHistory: React.FC = () => {
  return (
    <div className="space-y-2">
      <label htmlFor="backstory">Conte a história do seu personagem</label>
      <textarea
        id="backstory"
        placeholder="Nascido em..."
        className="min-h-32 resize-none"
      />
    </div>
  );
};

export default CharHistory;
