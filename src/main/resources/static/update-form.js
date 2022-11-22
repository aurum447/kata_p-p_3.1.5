$('#edit').on('show.bs.modal', ev => {
    let button = $(ev.relatedTarget);
    let id = button.data('id');
    showEditModal(id);
})

async function showEditModal(id) {
    $('#rolesEditUser').empty();
    let user = await getUser(id);
    let form = document.forms["formEditUser"];
    form.id.value = user.id;
    form.username.value = user.username;
    form.password.value = user.password;
    form.socialCredit.value = user.socialCredit;

    await fetch("http://localhost:8080/rest/roles")
        .then(res => res.json())
        .then(roles => {
            roles.forEach(role => {

                let selectedRole = false;
                for (let i = 0; i < user.roles.length; i++) {
                    if (user.roles[i].title === role.title) {
                        selectedRole = true;
                        break;
                    }
                }

                let el = document.createElement("option");
                el.text = role.title;
                el.value = role.id;
                if (selectedRole) el.selected = true;
                $('#rolesEditUser')[0].appendChild(el);
            })
        })
}

async function getUser(id) {
    let url = "http://localhost:8080/rest/admin/" + id;
    let response = await fetch(url);
    return await response.json();
}