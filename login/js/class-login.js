export class Login {
    constructor() {
        this.modal = document.createElement('div');
        this.contentModal = document.createElement('div');
        this.tiitleModal = document.createElement('h2');
        this.closeBtn = document.createElement('span');
    }

    createFormEnter() {
        this.modal.className = 'modal1';
        document.body.append(this.modal);
        this.contentModal.className = 'content';
        this.modal.append(this.contentModal);
        this.tiitleModal.className = 'modal1-title';
        this.tiitleModal.innerText = 'Enter your login and password';
        this.contentModal.append(this.tiitleModal);
        this.closeBtn.className = 'modal1-close';
        this.closeBtn.innerHTML = '&times;';
        this.contentModal.append(this.closeBtn);
        this.contentModal.insertAdjacentHTML('beforeend', `<form class="entry-field-modal" >
<label for="input-email" class="form-label">Email address</label>
<input type="email" id="input-email" class="modal-input email-enter"  required>
<label for="input-password" class="form-label">Enter password</label>
<input type="password"  id="input-password" class="modal-input password-enter"  required>
<input type="submit"  class="enter-btn" value="Enter">
</form>`)
    }

    enter() {
        // добавить трай кетч
        const myModal = document.querySelector('.modal1')
        document.querySelector('.enter-btn').addEventListener('click', (e) => {

            const password = document.querySelector('.email-enter').value
            const email = document.querySelector('.password-enter').value
            if (password.length !== 0 && email.length !== 0) {
                e.preventDefault()
                myModal.remove()
                fetch('https://ajax.test-danit.com/api/v2/cards/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                })
                    .then(response => {
                        if (response.ok) {
                            console.log('Welcome!')
                            return response.text()
                        } else {
                            alert('Enter correct email or password!')
                        }
                    }).then(token => {
                        localStorage.setItem('token', token);
                        let admin = localStorage.getItem('token')
                        if (token === admin) {

                            // document.location.href = ('./html/form.html')
                        } else {

                            // document.location.href = ('./index.html')
                        }
                    })
            }
        })
    }
}
// Object.defineProperty()