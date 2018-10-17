# prosjekt-3 gruppe-17

##Appen
I dette prosjektet valgte vi å lage en app som skal fungere som en personal manager. Appen kom til å inneholde 4 hoved element. 

-Datovelger: kan velge spesifikk dato ved hjelp av en kalender eller  
 kunne bruke piler for å gå fram og tilbake

-Tasks: liste som ein kan skrive inn ting ein må gjere og hake dei 
 Av når det er gjordt. Også mogleg å slette dei.

-Appointments: ei liste der ein skriv inn eit tidspunkt og ein ting en 
 skal på det tidspunktet. Også mogleg å slette disse 

-Daily Goals: ei «fast» list som er lik for kvar dag og visst ein klarer
 dagens mål får ein legge til ein på streaken sin som kjem til å vise kor 
 lenge ein har holdt Dayily Goals gående. Denne lista kjem til å 
 inneholde ein skritteller muligheit og 2 andre som ein kan vlge sjølv

 
 


## DatePicker Library
DatePicker bibloteket kombinerer DatePickerAndroid, TimePickerAndroid og DatePickerIOS. Som gjer at datePicker komponenten skal fungere på android og IOS I tillegg til at den er modal som gjer at ein får ein profesjonell følelse av den. For å instalere bibloteket må man skrive I konsollet:

*npm install --save react-native-modal-datetime-picker*

også må man importere DateTimePicker:

*import DateTimePicker from 'react-native-modal-datetime-picker';*

DateTimePicker har mange funksjoner for å bestemme korleis Pickeren skal oppføre seg men, vi kjem til å holde oss til dei som er nødvendige.
I render funksjonen må vi ha tre funksjoner. (her er det fire, den siste gjer at pickeren ser lik ut på IOS og Android) 

  *<DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
          datePickerModeAndroid={'spinner'}
        />*

isVisable bestemmer om modal pickeren er skjult eller ikkje.
onConfirm bestemmer hva som skjer når du velger dato
onCancel  bestemmer hva som skjer når du går ut av modal uten å velge dato.

I tillegg må en ha ein showPicker funksjon som logisk nok viser modal pickeren når ein trykker på datoen.

*<Text onPress={this.showPicker} style={styles.date}> {this.state.chosenDate} </Text>*

Funksjonane *hidePicker,handlePicker,showPicker* er vist i koden og kan skjekkast ut der. Men dei er ganske rett fram.



## Moment Library
Moment bibloteket er laget for å gjøre det enkelt å behandle og formatere dato objekter, som visst man bare bruke vanlig javascript er ganske tungvint. Så la oss bare hoppe rett i det.

Først må man instalere moment bibloteket. I dette tilfellet hvor vi bruker React så kan vi bruke NPM instalasjonen. Berre opne konsoll vinduet og skriv inn: 

*npm install moment –save*

Vent til instalasjonen er ferdig og du burde vere good to go. Når ein no starter React må ein importere bibloteket med linja 

*import moment from 'moment'*

og ein kan begynne å skrive moment kode. Moment har mange forskjellige kodar men her skal vi berre gå gjennom dei som blei brukt i dette prosjektet.

*Moment()*

lager eit uformatert dato objekt for det tidspunktet 	koden kjører

*Moment(dato)*

lager eit uformatert dato objekt for den input datoen den får inn

*Moment(X).format()*	

her formaterer ein eit moment objekt, det fins mange Kombinasjonar 
av formatering skjekk ut https://momentjs.com for ein meir detaljert
oversikt men her er nokre eksempel: Moment().format
(‘MMMM Do YYYY, h:mm:ss a') vil gi ut: October 17th 2018, 9:39:24 am

*Moment(X).add(1, ‘day’)*

her legg ein til ein dag til valgfri dato. ‘day’ kan her byttest ut me dei 
fleste tids begrep som: ‘hour’, ‘minute’ eller ‘year’
Tallet er hvor mange av valgt tid som skal legges til.

*Moment(X).subtract(1, ‘hour’)	*

denne er helt lik add funksjonen bare at den trekker fra valg antall tid 
istedenfor å legge til. 

*Moment(X).isSame(Y,’day’)*

denne skjekker om dato X er samme som dato Y Valg av «’day’» er valgfritt
men blir brukt  visst det er kun ein ting du vil skjekke som for eksempel om 
det er samme dag. Denne funksjonen vil gi ein true eller false output


Dette er grunnleggende itroduksjon til Moment.js for full documentsajon, guide og troubleshooting gå til https://momentjs.com for meir informasjon.

