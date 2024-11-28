class SomeClass {

    private neverUsedMethod() {
        console.log("This function is called");
    }

    public someMethod() {
        // Это вообще не нужно, если никогда не случится. В коде мусор не нужен, только отвлекает.
        //   if (false) {
        //       doSomethingThatNeverHappens();
        //   }

        try {
            this.doSomethingSafe();
        } catch (error) {
            error.printStackTrace();
        }
    }

    private doSomethingSafe() {
        console.log('Safe operation')
    }
}
