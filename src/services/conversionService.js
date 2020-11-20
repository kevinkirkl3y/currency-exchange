export default class Conversion {
  static async getConversion(baseCode) {
    try {
      const conversion = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${baseCode}`);
      if(!conversion.ok) {
        throw Error (conversion.statusText);
      }
      return conversion.json();
    } catch (error) {
      return error.message;
    }
  }
}