pub contract HelloFlownaut {
   pub var greeting: String

   pub fun changeGreeting(newGreeting: String) {
      self.greeting = newGreeting
   }

   init() {
      self.greeting = "Olá, Brasil!"
   }
}