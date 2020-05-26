package fullstack.stockmarket.stockprice.service;

import static java.util.stream.Collectors.toList;


import java.sql.Time;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import fullstack.stockmarket.common.api.ResultCode;
import fullstack.stockmarket.common.error.ServiceException;
import fullstack.stockmarket.stockprice.dto.StockPriceDto;
import fullstack.stockmarket.stockprice.model.StockPrice;
import fullstack.stockmarket.stockprice.repo.StockPriceRepo;

@Service
public class StockPriceService {
	@Autowired
	StockPriceRepo stockPriceRepo;
	
	@Autowired
	ModelMapper modelMapper;
	
	@PersistenceContext
	EntityManager entityManager;
	
	
	
	public StockPriceDto createStockPrice(StockPriceDto stockPriceDto) {
       StockPrice stockPrice = this.convertToModel(stockPriceDto);

       StockPrice savedStockPrice = null;
       try {
           savedStockPrice = stockPriceRepo.save(stockPrice);
       } catch (Exception ex) {
           String errMsg = "could not create stockPrice";
       }

       return this.convertToDto(savedStockPrice);
    }
	
	public StockPriceDto updateStockPrice(StockPriceDto stockPriceDto) {
        StockPrice existingStockPrice = stockPriceRepo.findById(stockPriceDto.getId()).orElse(null);
        if (existingStockPrice == null) {
            throw new ServiceException(ResultCode.NOT_FOUND, "StockPrice not found");
        }
        entityManager.detach(existingStockPrice);

        StockPrice newStockPrice = this.convertToModel(stockPriceDto);
        
        if (StringUtils.hasText(newStockPrice.getCompanyCode()) && !newStockPrice.getCompanyCode().equals(existingStockPrice.getCompanyCode())) {
            existingStockPrice.setCompanyCode(newStockPrice.getCompanyCode());
        }

        if (StringUtils.hasText(newStockPrice.getStockExchange()) && !newStockPrice.getStockExchange().equals(existingStockPrice.getStockExchange())) {
            	existingStockPrice.setStockExchange(newStockPrice.getStockExchange());
        }
        
        if (newStockPrice.getCurrent() !=0 && newStockPrice.getCurrent() != existingStockPrice.getCurrent()) {
        	existingStockPrice.setCurrent(newStockPrice.getCurrent());
        }
        
        if (newStockPrice.getDate() !=null && newStockPrice.getDate().equals(existingStockPrice.getDate())) {
        	existingStockPrice.setDate(newStockPrice.getDate());
        }
        
        
        StockPrice updatedStockPrice = null;
        try {
            updatedStockPrice = stockPriceRepo.save(existingStockPrice);
        } catch (Exception ex) {
            String errMsg = "could not update the stockPriceDto";
        }
        
        return this.convertToDto(existingStockPrice);
    }
	
	public void deleteStockPrice(int id) {
        try {
        	stockPriceRepo.deleteById(id);;
        } catch (Exception ex) {
            String errMsg = "could not delete the stockPrice";
        }
    }
	
	public List<StockPriceDto> getStockPriceByCompanyCode(String companyCode) {
		List<StockPrice> stockPrices =  stockPriceRepo.findByCompanyCode(companyCode);
		return stockPrices.stream().map(stockPrice -> convertToDto(stockPrice)).collect(toList());
	}
	
	public List<StockPriceDto> importExcelData(MultipartFile file) throws Exception {
		List<StockPrice> stockPriceList = null;
		stockPriceList = this.getExcelData(file);
		try {
			stockPriceRepo.saveAll(stockPriceList);
        } catch (Exception ex) {
            String errMsg = "could not import the stockPrice";
        }
		return stockPriceList.stream().map(stockPrice -> convertToDto(stockPrice)).collect(toList());
	}
	
	private List<StockPrice> getExcelData(MultipartFile file) throws Exception {
		List<StockPrice> stockPriceList = new ArrayList<StockPrice>();
		
		XSSFWorkbook  workbook = new XSSFWorkbook(file.getInputStream());
		XSSFSheet  sheet = workbook.getSheetAt(0);
		
		int lastRowNum = sheet.getLastRowNum();
		
		for (int i = 1; i <= lastRowNum; i++) {
	        XSSFRow row = sheet.getRow(i);
	        StockPrice stockPrice = new StockPrice();
	        if (row.getCell(0) != null){
	            row.getCell(0).setCellType(CellType.STRING);
	            stockPrice.setCompanyCode(row.getCell(0).getStringCellValue().trim());
	            
	        }
	        if (row.getCell(1) != null){
	            row.getCell(1).setCellType(CellType.STRING);
	            stockPrice.setStockExchange(row.getCell(1).getStringCellValue().trim());
	        }
	        if (row.getCell(2) != null){
	            //row.getCell(2).setCellType(CellType.NUMERIC);
	            stockPrice.setCurrent((float) row.getCell(2).getNumericCellValue());
	        }
	        if (row.getCell(3) != null){
	            stockPrice.setOpen((float) row.getCell(3).getNumericCellValue());
	        }
	        if (row.getCell(4) != null){
	            stockPrice.setClose((float) row.getCell(4).getNumericCellValue());
	        }
	        if (row.getCell(5) != null){
	            stockPrice.setHigh((float) row.getCell(5).getNumericCellValue());
	        }
	        if (row.getCell(6) != null){
	            stockPrice.setLow((float) row.getCell(6).getNumericCellValue());
	        }
	        if (row.getCell(7) != null){
	            stockPrice.setVolume((float) row.getCell(7).getNumericCellValue());
	        }
	        if (row.getCell(8) != null){
	        	row.getCell(8).setCellType(CellType.STRING);
	        	stockPrice.setDate(this.strToDate(row.getCell(8).getStringCellValue()));
	        }
	        
	        stockPriceList.add(stockPrice);
	    }
		
		return stockPriceList;
	}
	
	public java.sql.Date strToDate(String strDate) throws ParseException {
        String str = strDate;
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        System.out.println("strDate=== " + str);
        java.util.Date d = null;
        d = format.parse(str);
        java.sql.Date date = new java.sql.Date(d.getTime());
        return date;
    }

	
	public java.sql.Time strToTime(String strDate) {
        String str = strDate.trim();
        SimpleDateFormat format = new SimpleDateFormat("HH:mm:ss");
        System.out.println("strDate=== " + strDate);
        java.util.Date d = null;
        try {
            d = format.parse(str);
        } catch (Exception e) {
            e.printStackTrace();
        }
        java.sql.Time time = new java.sql.Time(d.getTime());
        return time.valueOf(str);
    }

	
	private StockPriceDto convertToDto(StockPrice stockPrice) {
        return modelMapper.map(stockPrice, StockPriceDto.class);
    }
	
	private StockPrice convertToModel(StockPriceDto stockPriceDto) {
        return modelMapper.map(stockPriceDto, StockPrice.class);
    }
}
