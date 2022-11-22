$('#delete').on('show.bs.modal', ev => {
    let button = $(ev.relatedTarget);
    let id = button.data('id');
    showDeleteModal(id);
})

async function showDeleteModal(id) {
    let user = await getUser(id);
    let form = document.forms["formDeleteUser"];
    form.id.value = user.id;
    form.username.value = user.username;
    form.socialCredit.value = user.socialCredit;

    $('#rolesDeleteUser').empty();

    await fetch("http://localhost:8080/rest/roles")
        .then(res => res.json())
        .then(roles => {
            roles.forEach(role => {
                let selected_Role = false;
                for (let i = 0; i < user.roles.length; i++) {
                    if (user.roles[i].title === role.title) {
                        selected_Role = true;
                        break;
                    }
                }
                let el = document.createElement("option");
                el.text = role.title;
                el.value = role.id;
                if (selected_Role) el.selected = true;
                $('#rolesDeleteUser')[0].appendChild(el);
            })
        });
}