import { Connection, Model, Instance, INTEGER, DefineOptions, DefineAttributes } from 'sequelize';

interface Thing {
    id?: number
}

interface ThingInstance extends Instance<Thing, ThingInstance> {
    id: number
}

const attributes : DefineAttributes = {};
const options : DefineOptions<ThingInstance> = {};

class Creator {
    public create(sequelize: Connection): Model<Thing, ThingInstance> {
        return sequelize.define<Thing, ThingInstance>('thing', attributes, options);
    }
}