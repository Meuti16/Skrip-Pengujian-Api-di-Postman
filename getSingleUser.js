/*
{
    "data": {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}
*/
pm.test('Respon status kode yaitu 200', () => {
    pm.response.to.have.status(200);
})
pm.test('Respon konten yaitu bertipe application/json', () => {
    pm.expect(pm.response.headers.get('Content-Type')).to.equals('application/json; charset=utf-8');
});
pm.test('Respons body data sudah mencakup data id, email, first_name, last_name and avatar', () => {
    const responseData = pm.response.json();

    const { data } = responseData;
    pm.expect(data.id).is.exist;
    pm.expect(data.email).is.exist.and.to.be.a('string');
    pm.expect(data.first_name).is.exist.and.to.be.a('string');
    pm.expect(data.last_name).is.exist.and.to.be.a('string');
    pm.expect(data.avatar).is.exist.and.to.be.a('string');
});
pm.test('Respons data ID avalah valid number', ()=> {
    const responseData = pm.response.json();
    const { data } = responseData;

    pm.expect(data.id).is.exist.and.to.equals(2);
});
pm.test('Respons data email adalah email yang valid', ()=> {
    const responseData = pm.response.json();
    const { data } = responseData;

    pm.expect(data.email).to.exist;
    pm.expect(data.email).to.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
});
pm.test('Respon data nama depan adalah nama yang valid', () => {
    const responseData = pm.response.json();
    const { data } = responseData;

pm.expect(data.first_name).has.length.at.least(1, "Nama depan harus diisi minimal satu karakter!");
});
pm.test('Respon data nama belakang adalah nama yang valid', () => {
    const responseData = pm.response.json();
    const { data } = responseData;

pm.expect(data.last_name).has.length.at.least(1, "Nama belakang harus diisi minimal satu karakter!");
});
pm.test('Respons data avatar adalah url yang valid', ()=> {
    const responseData = pm.response.json();
    const { data } = responseData;

    pm.expect(data.avatar).to.exist;
    pm.expect(data.avatar).to.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/);
});
pm.test('Respons body Support mencakup url dan text', () => {
    const responseData = pm.response.json();

    const { support } = responseData;
    pm.expect(support.url).is.exist;
    pm.expect(support.text).is.exist.and.to.be.a('string');
});
pm.test('Support url adalah url yang valid', ()=> {
    const responseData = pm.response.json();
    const { support } = responseData;

    pm.expect(support.url).to.exist;
    pm.expect(support.url).to.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/);
});
pm.test('Support text adalah teks valid', () => {
    const responseData = pm.response.json();
    const { support } = responseData;

pm.expect(support.text).has.length.at.least(1, "Teks harus diisi minimal satu karakter!");
});