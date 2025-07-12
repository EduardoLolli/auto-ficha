"use client";

import { useState, useEffect } from "react";
import { StyledLoading } from "./style";
import LoadingBackground from "./LoadingBackground";
import LoadingHeader from "./LoadingHeader";

interface LoadingScreenProps {
  message?: string;
  progress?: number;
}

export default function Loading({
  message = "Preparando sua aventura",
}: LoadingScreenProps) {
  const loadingText = message;
  const [dots, setDots] = useState("");

  // Animação dos pontos no texto
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev === "...") return "";
        return prev + ".";
      });
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <StyledLoading>
      <LoadingBackground />

      <div className="loading-container">
        <LoadingHeader />

        <h1 className="loading-title">Auto Ficha</h1>

        <div className="loading-text">
          <p className="">
            {loadingText}
            {dots}
          </p>
        </div>

        {/* Versão */}
        <div className="loading-footer">
          <p>Versão 2.0.1 - AF RPG System</p>
        </div>
      </div>

      {/* Efeito de brilho de fundo */}
      <div className="background-shine"></div>
    </StyledLoading>
  );
}
