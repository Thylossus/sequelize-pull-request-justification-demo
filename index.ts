import { Connection, Model, Instance, INTEGER, DefineOptions, DefineAttributes } from 'sequelize';

interface Thing {
    id?: number
}

interface ThingInstance extends Instance<ThingInstance, Thing> {
    id: number
}

const attributes : DefineAttributes = {};
const options : DefineOptions<ThingInstance> = {};




class Creator {
    public create(sequelize: Connection): Model<ThingInstance, Thing> {
        return sequelize.define<ThingInstance, Thing>('thing', attributes, options);
    }
}