import React from "react";

const InitialStats: React.FC = () => {
  return (
    <div>
      <div>
        <label htmlFor="hp">Pontos de Vida (HP)</label>
        <input id="hp" type="number" readOnly />
      </div>
      <div>
        <label htmlFor="xp">Experiência (XP)</label>
        <input id="xp" type="number" min="0" required />
      </div>
      <div>
        <label htmlFor="heroism">Heroísmo</label>
        <input id="heroism" type="number" min="0" required />
      </div>
    </div>
  );
};

export default InitialStats;
