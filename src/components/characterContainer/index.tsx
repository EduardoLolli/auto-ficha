const CharacterContainer = (
  { children, icone, texto }: { children: React.ReactNode, icone: string, texto: string }
) => {
  return (
    <div className="flex-1 bg-gray-900 bg-opacity-70 rounded-lg border-2 border-indigo-700 p-6 overflow-y-auto">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-white border-b-2 border-amber-500 pb-2 flex items-center">
          <span className="material-symbols-outlined mr-3 text-amber-500">
            {icone}
          </span>
          {texto}
        </h2>
      </div>

      {children}
    </div>
  );
};

export default CharacterContainer;
