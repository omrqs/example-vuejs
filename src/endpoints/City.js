import AbstractController from "./AbstractController";

class City extends AbstractController {
  static collectionName() {
    return "city";
  }
}

export default City;
