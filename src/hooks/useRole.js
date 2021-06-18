import store from "~/store";

function useUser() {
  const user = store.getState().user;
  return user;
}

function useRoles() {
  const roles = useUser()?.roles ?? [];
  return roles;
}

function hasRole(role) {
  if (typeof role != "string") return false;
  const roles = useRoles();
  return roles?.some((r) => r == `ROLE_${role.toUpperCase()}`) ?? false;
}

function hasAnyRole(roles = []) {
  return roles.some((r) => hasRole(r));
}

function isLoggedIn() {
  return useUser()?.username != null;
}

export { hasRole, useRoles, hasAnyRole, useUser, isLoggedIn };
