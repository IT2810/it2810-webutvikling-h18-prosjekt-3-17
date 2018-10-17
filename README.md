# prosjekt-3 gruppe-17
 


# DatePicker Library
DatePicker bibloteket

# Moment Library
Moment bibloteket er laget for å gjøre det enkelt å behandle og formatere dato objekter, som visst man bare bruke vanlig javascript er ganske tungvint. Så la oss bare hoppe rett i det.

Først må man instalere moment bibloteket. I dette tilfellet hvor vi bruker React så kan vi bruke NPM instalasjonen. Berre opne consol vinduet og skriv inn: 

«npm install moment --save»

Vent til instalasjonen er ferdig og du burde vere good to go. Når ein no starter React må ein importere bibloteket med linja 

«import moment from 'moment'» 

og ein kan begynne å skrive moment kode. Moment har mange forskjellige kodar men her skal vi berre gå gjennom dei som blei brukt i dette prosjektet.

Moment()

lager eit uformatert dato objekt for det tidspunktet 	koden kjører

Moment(dato)

lager eit uformatert dato objekt for den input datoen den får inn

Moment(X).format()	

her formaterer ein eit moment objekt, det fins mange Kombinasjonar 
av formatering skjekk ut https://momentjs.com for ein meir detaljert
oversikt men her er nokre eksempel: Moment().format
(‘MMMM Do YYYY, h:mm:ss a') vil gi ut: October 17th 2018, 9:39:24 am

Moment(X).add(1, ‘day’)

her legg ein til ein dag til valgfri dato. ‘day’ kan her byttest ut me dei 
fleste tids begrep som: ‘hour’, ‘minute’ eller ‘year’
Tallet er hvor mange av valgt tid som skal legges til.

Moment(X).subtract(1, ‘hour’)	

denne er helt lik add funksjonen bare at den trekker fra valg antall tid 
istedenfor å legge til. 
Moment(X).isSame(Y,’day’)
denne skjekker om dato X er samme som dato Y Valg av «’day’» er valgfritt
men blir brukt  visst det er kun ein ting du vil skjekke som for eksempel om 
det er samme dag.

Dette er grunnleggende itroduksjon til Moment.js for full documentsajon, guide og troubleshooting gå til https://momentjs.com for meir informasjon.

