import { IsNotEmpty } from "class-validator";

export class CreateCartDto {
    @IsNotEmpty()
    userId: string;

    @IsNotEmpty()
    productId: string;

    @IsNotEmpty()
    quantity: number;
}
