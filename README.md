# prosjekt-3 gruppe-17

##Appen
I dette prosjektet valgte vi � lage en app som skal fungere som en personal manager. Appen kom til � inneholde 4 hoved element. 

-Datovelger: kan velge spesifikk dato ved hjelp av en kalender eller  
 kunne bruke piler for � g� fram og tilbake

-Tasks: liste som ein kan skrive inn ting ein m� gjere og hake dei 
 Av n�r det er gjordt. Ogs� mogleg � slette dei.

-Appointments: ei liste der ein skriv inn eit tidspunkt og ein ting en 
 skal p� det tidspunktet. Ogs� mogleg � slette disse 

-Daily Goals: ei �fast� list som er lik for kvar dag og visst ein klarer
 dagens m�l f�r ein legge til ein p� streaken sin som kjem til � vise kor 
 lenge ein har holdt Dayily Goals g�ende. Denne lista kjem til � 
 inneholde ein skritteller muligheit og 2 andre som ein kan vlge sj�lv

 
 


## DatePicker Library
DatePicker bibloteket kombinerer DatePickerAndroid, TimePickerAndroid og DatePickerIOS. Som gjer at datePicker komponenten skal fungere p� android og IOS I tillegg til at den er modal som gjer at ein f�r ein profesjonell f�lelse av den. For � instalere bibloteket m� man skrive I konsollet:

*npm install --save react-native-modal-datetime-picker*

ogs� m� man importere DateTimePicker:

*import DateTimePicker from 'react-native-modal-datetime-picker';*

DateTimePicker har mange funksjoner for � bestemme korleis Pickeren skal oppf�re seg men, vi kjem til � holde oss til dei som er n�dvendige.
I render funksjonen m� vi ha tre funksjoner. (her er det fire, den siste gjer at pickeren ser lik ut p� IOS og Android) 

  *<DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
          datePickerModeAndroid={'spinner'}
        />*

isVisable bestemmer om modal pickeren er skjult eller ikkje.
onConfirm bestemmer hva som skjer n�r du velger dato
onCancel  bestemmer hva som skjer n�r du g�r ut av modal uten � velge dato.

I tillegg m� en ha ein showPicker funksjon som logisk nok viser modal pickeren n�r ein trykker p� datoen.

*<Text onPress={this.showPicker} style={styles.date}> {this.state.chosenDate} </Text>*

Funksjonane *hidePicker,handlePicker,showPicker* er vist i koden og kan skjekkast ut der. Men dei er ganske rett fram.



## Moment Library
Moment bibloteket er laget for � gj�re det enkelt � behandle og formatere dato objekter, som visst man bare bruke vanlig javascript er ganske tungvint. S� la oss bare hoppe rett i det.

F�rst m� man instalere moment bibloteket. I dette tilfellet hvor vi bruker React s� kan vi bruke NPM instalasjonen. Berre opne konsoll vinduet og skriv inn: 

*npm install moment �save*

Vent til instalasjonen er ferdig og du burde vere good to go. N�r ein no starter React m� ein importere bibloteket med linja 

*import moment from 'moment'*

og ein kan begynne � skrive moment kode. Moment har mange forskjellige kodar men her skal vi berre g� gjennom dei som blei brukt i dette prosjektet.

*Moment()*

lager eit uformatert dato objekt for det tidspunktet 	koden kj�rer

*Moment(dato)*

lager eit uformatert dato objekt for den input datoen den f�r inn

*Moment(X).format()*	

her formaterer ein eit moment objekt, det fins mange Kombinasjonar 
av formatering skjekk ut https://momentjs.com for ein meir detaljert
oversikt men her er nokre eksempel: Moment().format
(�MMMM Do YYYY, h:mm:ss a') vil gi ut: October 17th 2018, 9:39:24 am

*Moment(X).add(1, �day�)*

her legg ein til ein dag til valgfri dato. �day� kan her byttest ut me dei 
fleste tids begrep som: �hour�, �minute� eller �year�
Tallet er hvor mange av valgt tid som skal legges til.

*Moment(X).subtract(1, �hour�)	*

denne er helt lik add funksjonen bare at den trekker fra valg antall tid 
istedenfor � legge til. 

*Moment(X).isSame(Y,�day�)*

denne skjekker om dato X er samme som dato Y Valg av ��day�� er valgfritt
men blir brukt  visst det er kun ein ting du vil skjekke som for eksempel om 
det er samme dag. Denne funksjonen vil gi ein true eller false output


Dette er grunnleggende itroduksjon til Moment.js for full documentsajon, guide og troubleshooting g� til https://momentjs.com for meir informasjon.

