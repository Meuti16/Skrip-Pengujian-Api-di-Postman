/*
{
    "name": "meutia",
    "job": "zion resident",
    "updatedAt": "2024-09-21T02:34:28.566Z"
}
*/
pm.test('Respon status kode yaitu 200', () => {
    pm.response.to.have.status(200);
});
pm.test('Respon konten yaitu bertipe application/json', () => {
    pm.expect(pm.response.headers.get('Content-Type')).to.equals('application/json; charset=utf-8');
});
pm.test('Respon body mencakup data nama, job dan createdAt', () => {
    const responseData = pm.response.json();
    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.name).to.exist.and.to.be.a('string');
    pm.expect(responseData.job).to.exist.and.to.be.a('string');
    pm.expect(responseData.updatedAt).to.exist.and.to.be.a('string');
});
pm.test('Respon Data Nama tidak berupa string kosong', () => {
    const responseData = pm.response.json();
    pm.expect(responseData.name).to.be.a('string').and.to.have.lengthOf.at.least(1, "Nama Tidak Boleh Kosong!");
});
pm.test('Respon Data Job tidak berupa string kosong', () => {
    const responseData = pm.response.json();
    pm.expect(responseData.job).to.be.a('string').and.to.have.lengthOf.at.least(1, "Job Tidak Boleh Kosong!");
});

pm.test('Respon Data createdAt tidak berupa string kosong dan sesuai format', () => {
    const responseData = pm.response.json();
    pm.expect(responseData.updatedAt).to.be.a('string').and.to.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/);
});