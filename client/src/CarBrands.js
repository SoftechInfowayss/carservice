import React, { useState, useEffect } from 'react';
import { Table, Spinner, Container, Card, Button, Form, InputGroup } from "react-bootstrap";
import axios from 'axios';
import { motion } from 'framer-motion';
import './CarBrands.css';

const CarBrands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newBrand, setNewBrand] = useState("");

  // Fetch car brands from the API
  useEffect(() => {
    axios
      .get("https://carbackend-1-rul2.onrender.com/getcar")
      .then((response) => {
        setBrands(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching car brands:", error);
        setLoading(false);
      });
  }, [brands]);

  // Handle adding a new car brand
  const handleAddBrand = () => {
    if (!newBrand.trim()) return; // Prevent empty submissions

    axios
      .post("https://carbackend-1-rul2.onrender.com/createcar", { name: newBrand })
      .then((response) => {
        setBrands([...brands, response.data]); // Assuming the API returns the added brand
        setNewBrand("");
      })
      .catch((error) => {
        console.error("Error adding car brand:", error);
      });
  };

  return (
    <Container className="py-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="shadow-lg p-4 brand-card">
          <h2 className="text-center mb-4">
            <motion.span
              whileHover={{ scale: 1.1, color: "#00d2ff" }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Car Brands Management
            </motion.span>
          </h2>

          {loading ? (
            <div className="text-center">
              <Spinner animation="border" role="status" style={{ color: "#00d2ff" }} />
              <span className="ms-2">Loading...</span>
            </div>
          ) : (
            <>
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <InputGroup className="mb-4">
                  <Form.Control
                    type="text"
                    placeholder="Enter new car brand"
                    value={newBrand}
                    onChange={(e) => setNewBrand(e.target.value)}
                    className="brand-input"
                  />
                  <Button 
                    variant="info" 
                    onClick={handleAddBrand}
                    className="add-brand-btn"
                    whileHover={{ scale: 1.1 }}
                  >
                    Add Brand
                  </Button>
                </InputGroup>

                <div className="table-wrapper">
                  <Table bordered hover responsive className="text-center dashboard-table">
                    <thead className="table-header">
                      <tr>
                        <th>#</th>
                        <th>Brand Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {brands.map((brand, index) => (
                        <motion.tr
                          key={index}
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 100 }}
                        >
                          <td>{index + 1}</td>
                          <td>{brand.name}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </motion.div>
            </>
          )}
        </Card>
      </motion.div>
    </Container>
  );
};

export default CarBrands;
