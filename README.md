# prosjekt-3 gruppe-17

## Appen
I dette prosjektet valgte vi å lage en app som skal fungere som en personal manager. Appen kom til å inneholde 4 hovedelementer. 

-Datovelger: kan velge spesifikk dato ved hjelp av en kalender eller  
 kunne bruke piler for å gå fram og tilbake

-Tasks: liste som man kan skrive inn ting man må gjøre og hake de 
 av når det er gjort. Også muglig å slette de.

-Appointments: ei liste der man skriver inn et tidspunkt og en ting man 
 skal på det tidspunktet. Også muglig å slette disse 

-Daily Goals: ei «fast» liste som er lik for hver dag og hvis man klarer
 dagens mål får man legge til en på streaken sin som kommer til å vise hvor 
 lenge man har holdt Daily Goals gående. Denne lista kan 
 inneholde en skritteller mulighet og 2 andre som ein kan velge selv

I tillegg til dette bruker vi asyncStorage til å lagre tasks og appointments til spesifikke datoer og bytte til nye lister for hver dato. Streak og goals lagres også asynkront. Slik at streak vil holde seg updatert til en hver tid. Vi valgte dette fordi vi tenkte dette kom til å bli en god utfordring som ville løse oppgaven på en fin måte i tillegg til å faktisk vere et nyttig produkt.



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



## FlatList og ScrollView
FlatList og ScrollView er to forskjellige måter å vise scroll-bart materiale. Vi brukte begge deler i prosjektet fordi de har ulik kompleksitet som passer i forskjellige situasjoner.

ScrollView er en enkel substitusjon for et vanlig View, som gjør at du kan scrolle. Den er ikke mer komplisert enn det. Du importerer den på samme måte som andre ferdige react-komponenter fra react-native. Deretter kan du sette den inn <ScrollView> </ScrollView> rundt de elementene som du ønsker kan scrolles gjennom. I appen vår har vi brukt ScrollView rundt komponentene "GoalModal", "Tasks" og "Appointments".

Flatlist er en litt mer kompleks komponent som passer bedre for oppgaver som ikke er så statiske som den forrige. Vi brukte Flatlist for to do elementer og avtaler fordi disse kommer i ulike mengder.
Flatlist blir også importert som en vanlig ferdig react-komponent. Når du bruker den setter du <FlatList></Flatlist> rundt det som skal kunne blas gjennom. Den funksjonaliteten fra FlatList som vi har brukt er muligheten for å iterere gjennom en liste og rendere alle elementene i den scroll-bare FlatListen. Dette gjør du ved å sette 

<Flatlist data={ -- Der du vil hente dataene fra -- } renderItem={({item}) => 

-- mellom her skal alt stå som skal renderes i Flatlisten
 
 }/>



## TouchableWithoutFeedBack
TouchableWithoutFeedBack brukte vi i prosjektet for å kunne checke av en boks både når vi trykker på boksen, og på teksten. Det går an å ha onPress={} på TouchableWithoutFeedBack, men ikke på ikoner returnert av en annen komponent, så vi måtte uansett ha lagt ikonet i en annen komponent for å kunne bruke det som en knapp. For å bruke TouchableWithoutFeedBack på samme måte som vi gjorde trenger du bare å gjøre dette:

<TouchableWithoutFeedback onPress={ -- Det du trenger at onPress gjør -- }>
 
 -- Her finner du de komponentene som du ønsker å bruke onPress={} på.
 
</TouchableWithoutFeedback>



## AsyncStorage
AsyncStorage er en enkel måte å lagre data lokalt på en enhet. Du lagrer det du vil på en id som du bestemmer slik:

await AsyncStorage.setItem( -- ID --, -- Det du vil lagre --)

For å bruke AsyncStorage må du først importere den på samme måte som du gjør med andre ferdige react-native komponenter. Deretter må du gjøre funksjonen du skal bruke det i async. Dette gjorde vi sånn:

store_method = async ( -- eventuell input -- ) => {}

Inni klammene har du all koden du vil ha i metoden. Her kan du både lagre og hente.

Det kan være en god idé å sette henting og lagring av data i en try/catch for å forhindre krasj om noe skulle skje galt. Her er et eksempel på hva som kan stå i en enkel lagrings-metode:

try {
      let myString = JSON.stringify(-- input fra metoden --)
      await AsyncStorage.setItem( -- ID --, stateString)
    } 
catch (error) {
      alert(error)
    }
    
For å hente data bruker man linjen:

await AsyncStorage.getItem( -- ID -- )

Denne er det også lurt å sette i en try/catch. Det finnes flere metoder som kan være greit å bruke innen AsyncStorage, men dette er det grunnleggende som man trenger for å bare kunne hente og lagre en string. Ellers kan det være greit å vite at man bare kan lagre strings. Andre elementer kan gjøres om til strings ved JSON.stringify( -- element -- ), men da er det viktig å huske å parse det etterpå slik at du får elementet ditt når du henter det, og ikke en string-representant av det. Dette gjøres ved JSON.parse( -- string-version of your element -- ).



## Icons from @expo/vector-icons



