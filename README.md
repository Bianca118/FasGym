<h1 align="center" >
<font color="#f5f5dc"> GymFas</font>
<img src="C:\Users\fotab\Downloads\exercise.png" style="width:30px;" /> 
</h1><h4 align="center" >
<font color="#f5f5dc"> APLICAȚIE PENTRU GESTIONAREA  ACTIVITĂȚILOR ÎN SĂLII DE FITNESS. </font>
</h4>

<h2 >
<font color="#f5f5dc"> Despre GymFas</font>
</h2>


Proiectul în cauză este dedicat clienților sălii de fitness și a fost inițiat ca o idee ce își propune să ajute și eficientizeze procesul de intrare în sală.

<h2 >
<font color="#f5f5dc"> Cuprins </font>
</h2>


- **Pregătirea pentru folosire.**
- **Instalare. Pregătirea pentru utilizare.**
- **Caracteristici cheie.**

<h3 >
<font color="#f5f5dc"> 1. Pregătiri</font>
</h3>


   Pentru a interpreta codul de PHP va fi nevoie de un server web, cum ar fi \```Apache\``

Va fi necesar un mediu de dezvoltare precum PhpStorm, VisualStudioCode


<h3 >
<font color="#f5f5dc"> 2. Instalare</font>
</h3>

- Clonați proiectul în propriul calculator

```sh
git clone
```

<h3 >
<font color="#f5f5dc"> a) Backend</font>
</h3>


Navigare în directorul aplicației
```sh
cd GymFas\backend\LicențaF
```

- Actualizarea dependințelor

```sh
composer install
```

- Configurarea fișierului .env 
 
    Se recomandă clonarea fișierului \``` .env \``  și folosirea unui .env.local. În acest fișier va fi nevoie să configurați informațiile necesare pentru conectarea la baza de date. Va fi necesar setarea numelui bazei de date, a portului, numele de host.


- rularea migrărilor pentru a crea tabelele în baza de date specificată în \```.env.local\`` 

- pornirea aplicației rulând \```php artisan serve\`` 

- accesare aplicație la adresa  \```http://localhost:8000\``, unde \``` localhost \`` va fi definit ca nume de host în \```.env.local\`` , iar \```8000\`` reprezentând numărul portului 



<h3 >
<font color="#f5f5dc"> b) Frontend</font>
</h3>


Navigare în directorul aplicației
```sh
cd GymFas\frontend\Frontend\my-app
```

- Instalarea Node.js și npm - urmăriți pentru instalare https://nodejs.org/en
- Folosirea unui manager de versiuni Node precum nvm - https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

- Actualizarea dependințelor

```sh
npm install
```
- Pornirea serverului 
```sh
 npm run start
 ```
- Accesare frontend la adresa \```http://localhost:3000\``

<h3>
<font color="#f5f5dc"> 3. Caracteristici cheie</font>
</h3>

- **Înregistrare/Autentificare aplicație:** se va crea un cont apoi se va autentifica cu contul respectiv.
- **Actualizare date profil:** setarea pozei de profil împreună cu informațiile contului.
- **Rezervarea/Anularea unei clase**
- **Scanare cod QR pentru a intra în sală**

