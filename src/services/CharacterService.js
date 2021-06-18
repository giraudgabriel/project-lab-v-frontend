import baseApi from "~/service";

class CharacterService {
  async login(user) {
    return await baseApi.post("/login", user);
  }
  async get() {
    return await baseApi.get("/character/");
  }
  async getAllDto() {
    return await baseApi.get("/character/all");
  }
  async delete(id) {
    return await baseApi.delete(`/character?id=${id}`);
  }
  async add(user) {
    return await baseApi.post("/character", user);
  }
  async update(id, name) {
    return await baseApi.put(`/character?id=${id}&name=${name}`);
  }
}

export default new CharacterService();
