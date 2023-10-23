/* 
* 1. install stripe and react stripe js
* 2. create a checkout form with card element (card element contains: card number, expiration date, cvs, zip code) 
* 3. create account on stripe and get the publishable key pk
* 4. get card information 
* 5. create a payment method
* 6. use test card to test payment
* 7. on the server side: install stripe:
* 8. npm install --save stripe
* 9. create a payment intent api with payment method types: ['card']
* 10. make sure you provide amount in cents (multiply price with 100)
* 11. call payment intent api to get client secret and store it in a state
* 12. use confirmCardPayment api with client secret card info
* 13. display confirm card error 
* 14. display confirm card success
* 15. do things after payment ----->
*/