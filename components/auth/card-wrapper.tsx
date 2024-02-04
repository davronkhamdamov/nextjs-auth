import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Header from "../auth/header";
import Social from "./social";
import BackButton from "./back-button";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}
const CardWrapper = ({
    children,
    backButtonHref,
    backButtonLabel,
    headerLabel,
    showSocial,
}: CardWrapperProps) => {
    return (
        <Card className="w-[400px] shadow-lg">
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>{children}</CardContent>
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
            <CardFooter>
                <BackButton
                    href={backButtonHref}
                    label={backButtonLabel}
                ></BackButton>
            </CardFooter>
        </Card>
    );
};

export default CardWrapper;
