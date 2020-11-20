export default class Conversion {
  static async getConversion(base) {
    try {
      const conversion = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${base}`);
      if(!conversion.ok) {
        throw Error (conversion.statusText);
      }
      return conversion.json();
    } catch (error) {
      return error.message;
    }
  }
}