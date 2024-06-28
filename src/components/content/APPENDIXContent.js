import React,{useState} from 'react';
import { Table, Container, Button } from 'react-bootstrap';

const data = [
    { age: 0, premium: 0.02906, value: 10.100 },
    { age: 1, premium: 0.01590, value: 11.999 },
    { age: 2, premium: 0.01295, value: 12.517 },
    { age: 3, premium: 0.01162, value: 12.765 },
    { age: 4, premium: 0.01095, value: 12.893 },
    { age: 5, premium: 0.01065, value: 12.951 },
    { age: 6, premium: 0.01058, value: 12.965 },
    { age: 7, premium: 0.01063, value: 12.955 },
    { age: 8, premium: 0.01076, value: 12.930 },
    { age: 9, premium: 0.01095, value: 12.893 },
    { age: 10, premium: 0.01117, value: 12.850 },
    { age: 11, premium: 0.01142, value: 12.803 },
    { age: 12, premium: 0.01169, value: 12.751 },
    { age: 13, premium: 0.01197, value: 12.699 },
    { age: 14, premium: 0.01226, value: 12.644 },
    { age: 15, premium: 0.01257, value: 12.587 },
    { age: 16, premium: 0.01286, value: 12.534 },
    { age: 17, premium: 0.01319, value: 12.473 },
    { age: 18, premium: 0.01350, value: 12.417 },
    { age: 19, premium: 0.01387, value: 12.351 },
    { age: 20, premium: 0.01431, value: 12.273 },
    { age: 21, premium: 0.01469, value: 12.207 },
    { age: 22, premium: 0.01512, value: 12.132 },
    { age: 23, premium: 0.01556, value: 12.057 },
    { age: 24, premium: 0.01606, value: 11.972 },
    { age: 25, premium: 0.01656, value: 11.888 },
    { age: 26, premium: 0.01706, value: 11.806 },
    { age: 27, premium: 0.01762, value: 11.715 },
    { age: 28, premium: 0.01825, value: 11.614 },
    { age: 29, premium: 0.01894, value: 11.505 },
    { age: 30, premium: 0.01962, value: 11.399 },
    { age: 31, premium: 0.02037, value: 11.285 },
    { age: 32, premium: 0.02112, value: 11.173 },
    { age: 33, premium: 0.02194, value: 11.053 },
    { age: 34, premium: 0.02281, value: 10.927 },
    { age: 35, premium: 0.02369, value: 10.804 },
    { age: 36, premium: 0.02462, value: 10.675 },
    { age: 37, premium: 0.02562, value: 10.541 },
    { age: 38, premium: 0.02669, value: 10.400 },
    { age: 39, premium: 0.02787, value: 10.249 },
    { age: 40, premium: 0.02912, value: 10.093 },
    { age: 41, premium: 0.03044, value: 9.932 },
    { age: 42, premium: 0.03181, value: 9.771 },
    { age: 43, premium: 0.03325, value: 9.607 },
    { age: 44, premium: 0.03475, value: 9.441 },
    { age: 45, premium: 0.03637, value: 9.267 },
    { age: 46, premium: 0.03806, value: 9.092 },
    { age: 47, premium: 0.03987, value: 8.911 },
    { age: 48, premium: 0.04181, value: 8.724 },
    { age: 49, premium: 0.04387, value: 8.533 },
    { age: 50, premium: 0.04612, value: 8.333 },
    { age: 51, premium: 0.04850, value: 8.130 },
    { age: 52, premium: 0.05100, value: 7.926 },
    { age: 53, premium: 0.05362, value: 7.722 },
    { age: 54, premium: 0.05637, value: 7.518 },
    { age: 55, premium: 0.05931, value: 7.310 },
    { age: 56, premium: 0.06244, value: 7.099 },
    { age: 57, premium: 0.06575, value: 6.888 },
    { age: 58, premium: 0.06925, value: 6.676 },
    { age: 59, premium: 0.07294, value: 6.464 },
    { age: 60, premium: 0.07681, value: 6.255 },
    { age: 61, premium: 0.08167, value: 6.008 },
    { age: 62, premium: 0.08589, value: 5.806 },
    { age: 63, premium: 0.09025, value: 5.610 },
    { age: 64, premium: 0.09475, value: 5.419 },
    { age: 65, premium: 0.09938, value: 5.234 },
    { age: 66, premium: 0.10415, value: 5.054 },
    { age: 67, premium: 0.10907, value: 4.879 },
    { age: 68, premium: 0.11414, value: 4.709 },
    { age: 69, premium: 0.11938, value: 4.543 },
    { age: 70, premium: 0.12483, value: 4.380 },
    { age: 71, premium: 0.13054, value: 4.220 },
    { age: 72, premium: 0.13652, value: 4.062 },
    { age: 73, premium: 0.14278, value: 3.907 },
    { age: 74, premium: 0.14936, value: 3.753 },
    { age: 75, premium: 0.15627, value: 3.602 },
    { age: 76, premium: 0.16356, value: 3.453 },
    { age: 77, premium: 0.17125, value: 3.305 },
    { age: 78, premium: 0.17937, value: 3.160 },
    { age: 79, premium: 0.18796, value: 3.016 },
    { age: 80, premium: 0.19706, value: 2.875 },
];

const LifeInterestTable = () => {
    const [showTable, setShowTable] = useState(false);

    const handleClick = () => {
        setShowTable(true);
    };

    return (
        <Container>
            <h3 className="my-4">Life Interest Data</h3>
            <Button variant="primary" onClick={handleClick}>Generate Data</Button>
            {showTable && (
                <Table striped bordered hover className="mt-4">
                    <thead>
                        <tr>
                            <th>Age nearer birthday</th>
                            <th>Premium for unit sum assured (P)</th>
                            <th>(1/(p + d)-1)</th>
                            <th>Value of life interest of Re. 1 per annum at 6½% rate of interest</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td>{row.age}</td>
                                <td>{row.premium.toFixed(5)}</td>
                                <td>{(1 / (row.premium + 1) - 1).toFixed(5)}</td>
                                <td>{row.value.toFixed(3)}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </Container>
    );
};

export default LifeInterestTable;
