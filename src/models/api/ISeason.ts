import ICoverage from "@/models/api/ICoverage";

export default interface ISeason {
    year: number;
    start: string;
    end: string;
    current: boolean;
    coverage: ICoverage;
}
