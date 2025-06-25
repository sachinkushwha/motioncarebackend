// const {expressjwt:jwt}=require('express-jwt');
// const jwksrsa=require('jwks-rsa');

// const checkjwt=jwt({
//     secret:jwksrsa.expressJwtSecret(({
//         cache:true,
//         rateLimit:true,
//         jwksRequestsPerMinute:5,
//         jwksUri:'https://dev-w6btg3l42g00b1oa.us.auth0.com/.well-known/jwks.json'
//     })),
//     audience:'https://dev-w6btg3l42g00b1oa.us.auth0.com/api/v2/',
//     issuer:'dev-w6btg3l42g00b1oa.us.auth0.com',
//     algorithms:["RS256"],
// })
// module.exports=checkjwt;