function blockbusterFactory() {
    this.createMember = function(name, type) {
        let member;

        if (type === 'easy') {
            member = new EasyMembership(name)
        } else if (type === 'standard') {
            member = new StandardMembership(name)
        } else if (type = 'gold') {
            member = new GoldMembership(name)
        }

        member.type = type;

        member.define = function () {
            console.log(`${this.name} (${this.type}): ${this.cost}`)
        }

        return member
    }
}


const EasyMembership = function(name) {
    this.name = name;
    this.cost = "$6"
}

const StandardMembership = function(name) {
    this.name = name;
    this.cost = "$10"
}

const GoldMembership = function(name) {
    this.name = name;
    this.cost = "$20";
}

const members = [];
const factory = new blockbusterFactory()


members.push(factory.createMember('LeBron James', 'easy'))
members.push(factory.createMember('Kobe Bryant', 'standard'))
members.push(factory.createMember('Tracy McGrady', 'easy'))
members.push(factory.createMember('Michael Jordan', 'easy'))
members.push(factory.createMember('Dirk Nowitzki', 'gold'))
members.push(factory.createMember('Manu Ginobili', 'gold'))


members.forEach(function(member) {
    member.define()
})