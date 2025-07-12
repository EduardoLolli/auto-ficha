<div className="lg:hidden">
  <Tabs
    defaultValue="equipment"
    className="w-full"
    onValueChange={(value) => setActiveTab(value)}
  >
    <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-800/80 max-w-md mx-auto">
      <TabsTrigger
        value="equipment"
        className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-gray-300"
      >
        Equipamentos
      </TabsTrigger>
      <TabsTrigger
        value="inventory"
        className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-gray-300"
      >
        Inventário
      </TabsTrigger>
    </TabsList>

    {/* Conteúdo das Abas para Mobile/Tablet */}
    <TabsContent value="equipment">
      <EquipmentSection
        equippedItems={equippedItems}
        onHover={setHoveredItem}
      />
    </TabsContent>

    <TabsContent value="inventory">
      <InventorySection
        inventoryItems={inventoryItems}
        totalWeight={totalWeight}
        maxWeight={maxWeight}
        gold={gold}
        onHover={setHoveredItem}
        onItemClick={setActionModalItem}
        activeItemId={actionModalItem}
        onItemAction={handleItemAction}
      />
    </TabsContent>
  </Tabs>
</div>;
