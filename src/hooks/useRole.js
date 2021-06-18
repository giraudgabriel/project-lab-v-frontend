import store from "~/store";

function useRoles() {
  const roles = store.getState().user.roles;
  return roles;
}

function hasRole(role) {
  if (typeof role != "string") return false;
  const roles = useRoles();
  return roles.some((r) => r == `ROLE_${role.toUpperCase()}`);
}

export { hasRole, useRoles };
