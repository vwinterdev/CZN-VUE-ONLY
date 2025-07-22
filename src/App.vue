<template>
  <nav>
    <RouterLink to="/">Граждане</RouterLink>
    <RouterLink to="/employers">Работодатели</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>

</template>

<style>
nav{
  display: flex;
  padding: 5px 20px;
  margin-bottom: 5px;
  gap: 20px;
  border: 1px solid var(--p-splitter-border-color);
  background: var(--p-splitter-background);
  border-radius: var(--p-border-radius-md);
  color: var(--p-splitter-color);

}
</style>
