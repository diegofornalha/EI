You must guess the password of this contract to unlock superpowers.

```cadence
pub contract Password {

    pub let password: String
    pub var locked: Bool

    pub fun unlock(guess: String) {
        if guess == self.password {
            self.locked = false
        }
    }

    init(password: String) {
        self.password = password
        self.locked = true
    }
}
```