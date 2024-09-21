pm.test('Respon status kode yaitu 204', () => {
    pm.response.to.have.status(204);
});
pm.test("Respon body kosong", () => {
    pm.expect(pm.response.text()).to.be.empty;
});
