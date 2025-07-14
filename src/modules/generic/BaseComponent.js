class BaseComponent {
  constructor() {
    if (this.constructor === BaseComponent) {
      throw new Error('Cannot create abstract class BaseComponent')
    }
  }

  getProxyState(initialState) {
    return new Proxy(initialState, {
      get: (target, prop) => {
        return target[prop]
      },
      set: (target, prop, newValue) => {
        const oldValue = target[prop]

        target[prop] = newValue

        if (newValue !== oldValue) {
          this.updateUI()
        }

        return true
      },
    })
  }

  /**
   * redrawing UI in response to session update
   */
  updateUI() {
    throw new Error('It is necessary to implement method updateUI')
  }

}

export default BaseComponent