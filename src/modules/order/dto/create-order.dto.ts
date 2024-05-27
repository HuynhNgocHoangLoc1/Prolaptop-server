import { IsNotEmpty } from "class-validator";

export class CreateOrderDto {
    @IsNotEmpty()
    userId: string;

    @IsNotEmpty()
    date: Date;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    email: string;
    
    @IsNotEmpty()
    phoneNumber: string;

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    price: number;
}
