export class DataMapper<T, DTO> {
  private entityConstructor: new (dto?: DTO) => T;
  private dtoConstructor: new (entity?: T) => DTO;

  constructor(entityConstructor: new (dto?: DTO) => T, dtoConstructor: new (entity?: T) => DTO) {
    this.entityConstructor = entityConstructor;
    this.dtoConstructor = dtoConstructor;
  }

  mapToEntity(dto?: DTO) {
    return new this.entityConstructor(dto);
  }

  mapToDTO(entity?: T): DTO {
    return new this.dtoConstructor(entity);
  }
}
