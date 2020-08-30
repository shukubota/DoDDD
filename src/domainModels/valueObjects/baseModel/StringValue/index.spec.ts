import { StringValue } from './index';
import { plainToClass, classToPlain, Expose } from 'class-transformer';
import { IsEmail } from "class-validator";
import { transformAndValidate } from "class-transformer-validator";

class Animal {
  name: string;
  constructor(params: any) {
    this.name = 'aaa';
  }
}

class Human extends Animal {
}

class Lion {
  @Expose() test: string;
  @Expose() test2: number;
  // constructor(props: { test: string, test2: number}) {
  //   console.log(props)
  //   this.test = props.test;
  //   this.test2 = props.test2;
  // }
}

describe('StringValue', () => {
  it('should return "Hello World!"', () => {
    const stringValue = plainToClass(StringValue, 1);
    console.log(classToPlain(stringValue))
    console.log(stringValue === '1');
    console.log(new String(1))
    // expect(stringValue).toBe(new StringValue('aaa'));
    // assert(stringValue === new String(1))
    // assert(stringValue === new String('1'))
    // assert(stringValue === String('aaa'))
    // assert(stringValue instanceof String)
    // assert(stringValue instanceof StringValue)
    // assert('1' instanceof StringValue)
    // assert('1' instanceof String)
    // assert(Human === Lion)
    console.log(plainToClass(Lion, { test: 1, test2: 2, test3: 2 }, { excludeExtraneousValues: true }))
    console.log(plainToClass(StringValue, { test: 1 }))
    // excludeExtraneousValues
  });
});
