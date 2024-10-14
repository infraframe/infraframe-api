export interface Key {
  /**
   * @isInt
   * @minimum minimum age is 18
   */
  _id: number;
  /**
   * @minLength 1 at least 1 category is required
   */
  key: string;
}
