import React from "react";
import { Shield, Sword, Users, Crown, Sparkles } from "lucide-react";

const LoadingHeader: React.FC = () => (
  <div className="load-header">
    <div className="load-header-container">
      {/* Círculo externo rotativo */}
      <div className="load-circle"></div>

      {/* Círculo interno rotativo reverso */}
      <div
        className="load-reverse-circle"
      ></div>

      {/* Escudo central */}
      <div className="shield-div">
        <Shield className="shield" />

        {/* Brilho interno */}
        <div className="shield-shine"></div>
      </div>

      {/* Ícones orbitais */}
      <div
        className="orbital-div"
      >
        <Sword className="sword-icon" />
        <Users className="user-icon" />
        <Crown className="crown-icon" />
        <Sparkles className="sparkles-icon" />
      </div>
    </div>
  </div>
);

export default LoadingHeader;
