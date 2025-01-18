function solution(spell, dic) {
    const sortedSpell = spell.sort().join('');
    
    return dic.some(word => word.split('').sort().join('') === sortedSpell) ? 1 : 2;
}