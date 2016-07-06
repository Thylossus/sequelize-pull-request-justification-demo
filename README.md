# sequelize-pull-request-justification-demo

This is just an example to demonstrate an issue I'm encountering when using the sequelize typings from https://github.com/louy/typed-sequelize.

This project cannot be compiled with `tsc` (version 1.8.10) due to the following error:

```
index.ts(19,16): error TS2322: Type 'sequelize.Model<ThingInstance, Thing>' is not assignable to type 'sequelize.SequelizeStaticAndInstance.Model<ThingInstance, Thing>'.
  Types of property 'scope' are incompatible.
    Type '(options?: string | string[] | ScopeOptions | WhereOptions) => Model<ThingInstance, Thing>' is not assignable to type '(options?: string | string[] | ScopeOptions | WhereOptions) => this'.
      Type 'Model<ThingInstance, Thing>' is not assignable to type 'this'.

```
