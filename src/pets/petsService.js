import http from "../http";

class PetsService {
  getAll() {
    return http.get("/pets");
  }

  get(id) {
    return http.get(`/pets/${id}`);
  }

  create(data) {
    return http.post("/pets", data);
  }

  update(id, data) {
    return http.put(`/pets/${id}`, data);
  }

  delete(id) {
    return http.delete(`/pets/${id}`);
  }
}

export default new PetsService();
