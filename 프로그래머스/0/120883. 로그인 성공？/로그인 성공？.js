function solution(id_pw, db) {
    const [id, pw] = id_pw;
    let isExistingId = false;
    for (let user of db) {
        if (user[0] === id && user[1] === pw) return 'login';
        if (user[0] === id && !(user[1] === pw)) isExistingId = true;
    }
    
    return isExistingId ? 'wrong pw' : 'fail';
}