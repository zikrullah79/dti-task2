exports.perimeter = (s1,s2,s3) => (s1+s2+s3),
exports.area = (s1,s2,s3) => {
    //formula heron
    let s = (s1 + s2 + s3)/2;
    return (Math.sqrt(s*((s-s1)*(s-s2)*(s-s3))));;
}