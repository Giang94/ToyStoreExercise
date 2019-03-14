package agile.test.exercise.services;

import agile.test.exercise.model.Order;
import agile.test.exercise.repository.OrderRepository;
import agile.test.exercise.responseoject.GenericResponseObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    @Autowired
    private OrderRepository repository;

    public GenericResponseObject createOrder(Order order) {
        GenericResponseObject responseObject = new GenericResponseObject();
        try {
            repository.save(order);
        } catch (Exception e){
            responseObject.setStatus("FAILED");
        }
        return responseObject;
    }
}
